"use server"

import { auth } from "@clerk/nextjs/server"
import { prisma } from "./prisma";
import { z } from "zod"
import { revalidatePath } from "next/cache";
import { imagekit } from "./utils";
import { UploadResponse } from "imagekit/dist/libs/interfaces";

export const followUser = async (targetUserId: string) => {
  const { userId } = await auth();

  if (!userId) return;

  const existingFollow = await prisma.follow.findFirst({
    where: {
      followerId: userId,
      followingId: targetUserId,

    },
  });

  if (existingFollow) {
    await prisma.follow.delete({
      where: { id: existingFollow.id },
    });
  } else {
    await prisma.follow.create({
      data: {followerId: userId, followingId: targetUserId,},
    });
  }
};

export const likePost = async (postId: number) => {
  const { userId } = await auth();

  if (!userId) return;

  const existingLike = await prisma.like.findFirst({
    where: {
      userId: userId,
      postId: postId,

    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: { id: existingLike.id },
    });
  } else {
    await prisma.like.create({
      data: { userId, postId },
    });
  }
};

export const rePost = async (postId: number) => {
  const { userId } = await auth();

  if (!userId) return;

  const existingRePost = await prisma.post.findFirst({
    where: {
      userId: userId,
      rePostId: postId,
    },
  });

  if (existingRePost) {
    await prisma.post.delete({
      where: { id: existingRePost.id },
    });
  } else {
    await prisma.post.create({
      data: { userId, rePostId: postId, description: "" },
    });
  }
};

export const savePost = async (postId: number) => {
  const { userId } = await auth();

  if (!userId) return;

  const existingSavedPost = await prisma.savePosts.findFirst({
    where: {
      userId: userId,
      postId: postId,
    },
  });

  if (existingSavedPost) {
    await prisma.savePosts.delete({
      where: { id: existingSavedPost.id },
    });
  } else {
    await prisma.savePosts.create({
      data: { userId, postId },
    });
  }
};

export const addComment = async (
  prevState: { success: boolean; error: boolean } = { success: false, error: false },
  formData: FormData
) => {
  const { userId } = await auth();

  if (!userId) return { success: false, error: true };

  const postId = formData.get("postId");
  const username = formData.get("username");
  const description = formData.get("desc");

  const Comment = z.object({
    parentPostId: z.number(),
    description: z.string().max(140),
  });

  const validatedFields = Comment.safeParse({
    parentPostId: Number(postId),
    description,
  });

  if (!validatedFields.success) {
    return { success: false, error: true };
  }

  try {
    await prisma.post.create({
      data: {
        ...validatedFields.data,
        userId,
      },
    });
    revalidatePath(`/${username}/status/${postId}`);
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const addPost = async (
  prevState: { success: boolean; error: boolean } = { success: false, error: false },
  formData: FormData
) => {
  const { userId } = await auth();

  if (!userId) return { success: false, error: true };

  const description = formData.get("desc");
  const file = formData.get("file") as File;
  const isSensitive = formData.get("isSensitive") as string;
  const imgType = formData.get("imgType");

  const uploadFile = async (file: File): Promise<UploadResponse> => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transformation = `w-600,${imgType === "square" ? "ar-1-1" :
        imgType === "wide" ? "ar-16-9" : ""
      }`;

    return new Promise((resolve, reject) => {
      imagekit.upload(
        {
          file: buffer,
          fileName: file.name,
          folder: "/posts",
          ...(file.type.includes("image") && {
            transformation: {
              pre: transformation,
            },
          }),
        },
        function (error, result) {
          if (error) reject(error);
          else resolve(result as UploadResponse);
        }
      );
    });
  };

  const Post = z.object({
    description: z.string().max(140),
    isSensitive: z.boolean().optional()
  });

  const validatedFields = Post.safeParse({
    description,
    isSensitive: JSON.parse(isSensitive)
  });

  if (!validatedFields.success) {
    return { success: false, error: true };
  }

  let img = "";
  let imgHeight = 0;
  let video = "";

  if (file.size) {
    const result: UploadResponse = await uploadFile(file);

    if (result.fileType === "image") {
      img = result.filePath
      imgHeight = result.height
    } else {
      video = result.filePath
    }
  }

  try {
    await prisma.post.create({
      data: {
        ...validatedFields.data,
        userId,
        img,
        imgHeight,
        video,
      },
    });
    revalidatePath(`/`);
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }

}

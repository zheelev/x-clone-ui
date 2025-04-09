"use server"

import { imagekit } from "./utils"



export const shareAction = async (
    formData: FormData,
    settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
    const file = formData.get("file") as File;
    // const desc = fromData.get("desc") as string;

    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);

    const transformation = `w-600, ${settings.type === "square"
        ? "ar-1-1"
        : settings.type === "wide"
            ? "ar-16-9"
            : ""
        }`;

    imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: "/posts",
        ...(file.type.includes("image") &&
        {
            transformation: {
                pre: transformation
            },
        }),

        customMetadata: {
            sensetive: settings.sensitive,
        }
    },
        function (error, result) {
            if (error) console.log(error);
            else console.log(result);
        }
    );
};
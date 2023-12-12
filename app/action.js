"use server"

import connect from "./lib/db";
import Series from "./models/Serie";

export const getSeries = async (page = 1, pageSize = 2) => {
    await connect();
    try {
        const skipCount = (page - 1) * pageSize;
        const result = await Series.find().skip(skipCount).limit(pageSize);
        const plainObject = await JSON.parse(JSON.stringify(result)); // needed to convert mondob object (like objectID) to plain object
        
        return plainObject
    } catch (err) {
        return { error: 'Failed to fetch series!' };
    }
};

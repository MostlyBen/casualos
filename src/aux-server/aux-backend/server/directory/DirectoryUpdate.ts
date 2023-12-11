import z from 'zod';

export interface DirectoryUpdate {
    /**
     * The public human readable name of the directory entry.
     */
    publicName: string;

    /**
     * The key that can be used to uniquely identify the entry.
     */
    key: string;

    /**
     * The password that should be used to update the entry.
     * If the password doesn't match then the entry should not be allowed to update.
     */
    password: string;

    /**
     * The private IP Address that should be stored in the listing.
     */
    privateIpAddress: string;

    /**
     * The public IP Address should be stored in the listing.
     */
    publicIpAddress: string;
}

/**
 * The schema for a directory update.
 */
export const DirectoryUpdateSchema = z.object({
    publicName: z.string().min(1),
    key: z.string().min(1),
    password: z.string().min(1),
    privateIpAddress: z.string().min(1),
    publicIpAddress: z.string().min(1),
});

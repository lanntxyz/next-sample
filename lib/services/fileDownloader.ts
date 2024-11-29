import { CookieName } from "../utils/constants";

export async function download(minutes_id: string): Promise<void> {
    try {
        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const tokenName = CookieName.JWT_TOKEN;
        const tokenRegex = new RegExp(`(?:(?:^|.*;\\s*)${tokenName}\\s*=\\s*([^;]*).*$)|^.*$`);
        const cookie = document.cookie;
        const token = cookie.replace(tokenRegex, "$1");
        const response = await fetch(`${baseURL}/minutes/${minutes_id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const urlObject = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = urlObject;
        link.download = `minutes_${minutes_id}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(urlObject);

        console.log('File downloaded successfully');
    } catch (error) {
        console.error('Error downloading the file', error);
        throw error;
    }
}

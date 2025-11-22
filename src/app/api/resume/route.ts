import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    // Adjust filename if necessary
    const filePath = path.join(process.cwd(), 'public', 'prajwal_hiremath_resume_v2.pdf');

    try {
        if (!fs.existsSync(filePath)) {
            return new NextResponse("Resume file not found", { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="A_S_Prajwal_Hiremath_Resume.pdf"',
            },
        });
    } catch (error) {
        console.error("Error serving resume:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
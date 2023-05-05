import { Injectable } from '@nestjs/common';
import { PDFOptions, PDFService } from '@t00nday/nestjs-pdf';

@Injectable()
export class PdfService {
    constructor(
        private readonly pdfService: PDFService
    ){}
    async getPdf(
        template: string,
        options?: PDFOptions,
    ) {
        return await this.pdfService.toBuffer(template, options);
    }
}

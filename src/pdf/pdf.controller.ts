import { Controller, Get, Header } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) {}

    @Get()
    @Header('Content-Type', 'application/pdf')
    async getPdf() {
        return await this.pdfService.getPdf("./");
    }
}

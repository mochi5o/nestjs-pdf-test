import { Module } from '@nestjs/common';
import { PDFModule } from '@t00nday/nestjs-pdf';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';

@Module({
    imports: [
        PDFModule.register({
            view: {
                root: '/Users/mochiko/tmp/nest/nest-0504/project/src/template',
                engine: 'pug',
            },
        }),
    ],
    controllers: [PdfController],
    providers: [PdfService],
})
export class PdfModule {}

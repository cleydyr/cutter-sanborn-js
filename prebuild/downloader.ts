import * as fs from "fs";
import * as path from "path";

interface DownloadResult {
  success: boolean;
  filePath?: string;
  error?: string;
}

interface PageDownloaderOptions {
  prefix?: string;
  extension?: string;
  destinationDir: string;
}

export class PageDownloader {
  private destinationDir: string;
  private readonly extension: string;

  constructor(private options: PageDownloaderOptions) {
    this.extension = options.extension || "html";
    this.destinationDir = options.destinationDir;
  }

  async downloadPage(url: string, filename?: string): Promise<DownloadResult> {
    this.destinationDir;

    try {
      const response = await fetch(url);

      const finalFilename = filename || `page-${Date.now()}.${this.extension}`;

      const filePath = path.join(this.destinationDir, finalFilename);

      const data = await response.text();

      try {
        await fs.promises.writeFile(filePath, data, {
          mode: 0o644,
        });
      } catch (writeError) {
        console.error("Error while writing file:", writeError);
        return {
          success: false,
          error: `Error while saving file: ${writeError}`,
        };
      }

      return {
        success: true,
        filePath,
      };
    } catch (error: any) {
      return {
        success: false,
        error: `Error while downloading page: ${error.message}`,
      };
    }
  }

  async downloadMultiplePages(urls: string[]): Promise<DownloadResult[]> {
    return Promise.all(
      urls.map((url, index) =>
        this.downloadPage(url, `page-${index + 1}.${this.extension}`)
      )
    );
  }
}

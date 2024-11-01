import { PageDownloader } from "./downloader";

const NUMBER_OF_PAGES = 9;

const urlTemplate = (pageNumber: number) =>
  `https://academico.ufrrj.br/biblioteca/cutter/cutter${pageNumber}.html`;

const downloader = new PageDownloader({
  extension: "html",
  prefix: "cutter-ufrrj-",
  destinationDir: "prebuild/pages",
});

(async function () {
  await downloader.downloadMultiplePages(
    Array.from({ length: NUMBER_OF_PAGES }).map((_, i) => urlTemplate(i + 1))
  );
})();

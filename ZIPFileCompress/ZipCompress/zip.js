var zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");

zip.generateAsync({ type: "blob" }).then(function (content) {
  // Force down of the Zip file
  saveAs(content, "archive.zip");
});

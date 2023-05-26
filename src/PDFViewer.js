export default function PDFViewer() {
  return (
        <div className="flex flex-col justify-center">
          <iframe
            title="my pdf"
            src="/one.pdf"
            frameBorder="0"
            height={600}
          ></iframe>
        </div>
  );
}

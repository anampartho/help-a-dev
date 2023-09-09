import URLEncoder from "./URLEncoder";

const Tool = ({ title, id = "url-encoder" }: { title: string; id: string }) => {
  return (
    <>
      <div className="flex items-center mb-4 rounded">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      {id === "url-encoder" && <URLEncoder />}
    </>
  );
};

export default Tool;

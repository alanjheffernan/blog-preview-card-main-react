import headerImage from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

function App() {
  return (
    <div className="bg-yellow-bg flex min-h-screen items-center justify-center p-6">
      <div className="max-w-80 rounded-2xl border border-neutral-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:max-w-96">
        <img className="mb-6 rounded-2xl" src={headerImage} alt="Blog Header" />
        <p className="bg-yellow-bg inline rounded px-4 py-1 font-extrabold">
          Learning
        </p>
        <p className="my-3 text-xs">Published 21 Dec 2023</p>
        <h2 className="hover:text-yellow-bg mb-3 text-xl font-extrabold">
          HTML & CSS foundations
        </h2>
        <p className=" mb-6 text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="inline-flex items-center gap-3">
          <img src={avatar} alt="avatar" className="h-6 w-6" />
          <p className="text-sm font-extrabold">Gary Hopper</p>
        </div>
      </div>
    </div>
  );
}

export default App;

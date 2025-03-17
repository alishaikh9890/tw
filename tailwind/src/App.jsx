import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-900 grid place-content-center h-screen">
        <h1 className="text-2xl text-amber-50 m-6">Text</h1>

        <div className="">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4">
            <div>
              <img className="h-15 w-15 rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4D03AQExcedDL36HLw/profile-displayphoto-shrink_200_200/B4DZV6RQUtHkAY-/0/1741513100062?e=2147483647&v=beta&t=UmUn_uiCLG5V7C_okoV7Q7oYi7rkFyMHBk9uq-v9wSw"
                alt=""
              />
            </div>
            <div>
              <div className="text-xl font-medium">
                Tailwind css
                <p className="text-slate-600 text-base">Alishan Shaikh</p>
              </div>
            </div>
          </div>
        </div>

    <button className="bg-sky-500">Buy Now</button>






      </div>
    </>
  );
}

export default App;

import TodoList from "./components/TodoList";

function App() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-5 text-center border border-1 p-5 bg-light">
            <TodoList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

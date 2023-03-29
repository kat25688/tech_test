import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  // https://api.github.com/search/repositories?q=Q

  async function apiFunction() {
    try {
      let response = await fetch(
        "https://api.github.com/search/repositories?q=Q"
      ); //fetch the api

      if (response.status === 404) {
        throw new Error("Unable to contact server"); //validation check
      } else {
        const jsonData = await response.json();
        console.log(jsonData); // result results as an object
        let tableData = "";
        // displaying that able to return 1 set of results
        console.log(`first name result: ${jsonData.items[0].name}`);
        console.log(`first login result: ${jsonData.items[0].owner.login}`);
        console.log(
          `first star count result: ${jsonData.items[0].stargazers_count}`
        );

        //for each result return name, owner > login, star count
        jsonData.forEach((result) => {
          tableData += `<tr>
            <td>${result.items.name}</td>
            <td>${result.items.owner.login}</td>
            <td>${result.items.stargazers_count}</td>
            </tr>`;
        });

        //push the data to the table
        document.getElementById("table_body").innerHTML = tableData;
      }
    } catch (error) {
      //adding in a try/catch to catch any errors and alerts
      alert(error);
    }
  }
  apiFunction();

  return (
    <div>
      <h1 className="text-center">API Results</h1>
      <div id="search_box">
        <form>
          <label for="search"></label>
          <input type="text" name="search" id="search" />
          {/* STATIC BUTTON - onClick="" the search will return the result */}
          <Button variant="dark">Search</Button>
        </form>
      </div>

      <div class="container">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th scope="col">Repository Name (name)</th>
              <th scope="col">Author Name (login)</th>
              <th scope="col">Number of Stars (stargazers_count)</th>
            </tr>
          </thead>
          <tbody id="table_body"></tbody>
        </table>
        <div id="prev_next">
          {/* STATIC BUTTON - onClick="" will show previous results */}
          <Button variant="dark" id="previous_button">
            Previous
          </Button>
        </div>

        <div>
          {/* STATIC BUTTON - onClick="" will show the next set of results */}
          <Button variant="dark" id="next_button">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

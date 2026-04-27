export default function Home() {



  return (



    <main style={{ padding: "40px", fontFamily: "Arial" }}>



      <h1>AI Construction Estimator</h1>



      <p>Describe your project and get an estimate.</p>



      <textarea



        placeholder="Example: Build a 20x20 deck with composite boards..."



        style={{ width: "100%", height: "100px", marginTop: "20px" }}



      />



      <br /><br />



      <button style={{ padding: "10px 20px", fontSize: "16px" }}>



        Generate Estimate



      </button>



    </main>



  );



}

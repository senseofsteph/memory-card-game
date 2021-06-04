/** 
 * Functionality to display the app game 
 */ 


function App() {
    return(
    <React.Fragment>
        <Header />
        <Main />
        <Footer />
    </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));
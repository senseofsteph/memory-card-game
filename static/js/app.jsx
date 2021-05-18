function App() {
    return(
    <React.Fragment>
        <Header />
        <h2>Hello Player!
        </h2>
        <Footer />
    </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));
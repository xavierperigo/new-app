const Home = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Home.defaultProps = {
    title: 'Home',
}

export default Home

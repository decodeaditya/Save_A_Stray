import { Helmet } from 'react-helmet'
import '../assets/css/404.css'

export default function NotFound(){
    return(
        <>
        <Helmet><title>Page Not Found</title></Helmet>
        <div class="landing-page section-details"><img src="https://img.freepik.com/premium-vector/cute-brown-dog-is-watching-obese-puppy-is-crying-pet-executes-command-stray-animal_637281-594.jpg?w=2000" alt=""/><h2> 404 Error.</h2><p> We can&apos;t find the page you&apos;re looking for.</p><div class="btn-container"><a id="btn" href="/">Take Me to Home</a></div></div></>
    )
}
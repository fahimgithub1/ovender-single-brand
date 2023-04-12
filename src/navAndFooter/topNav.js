import Link from "next/link";


export default function TopNav(){

    return(
        <div className="TopNev">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle-question"></i>
                                Help
                            </li>
                            <li>
                                <i className="fa-solid fa-headset"></i> 
                                Seller Center
                            </li>
                        </ul>
                    </div>
        
                    <div className="ContactDiv col-5">
                        <div className="SocialIocn float-right">
                            <ul>
                                <li> 
                                    <Link href="#" className="facbookNav">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href="#" className="tuitterNav"><i className="fa-brands fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link href="#" className="Youtube"><i className="fa-brands fa-youtube"></i></Link>
                                </li> 
                                <li>
                                    <Link href="#" className="Youtube"><i className="fa-brands fa-instagram"></i></Link>
                                </li>
                                <li>
                                    <Link href="#" className="facbookNav"><i className="fa-brands fa-linkedin-in"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
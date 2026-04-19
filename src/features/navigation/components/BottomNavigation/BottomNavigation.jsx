import './BottomNavigation.css'

function BottomNavigation() {
    return (
        <nav className='bottom-navigation'>
            <div className='page-container bottom-navigation-container'>
                <a href='#' className='bottom-navigation-link active'>Home</a>
                <a href='#' className='bottom-navigation-link'>Opties</a>
                <a href='#' className='bottom-navigation-link'>Prijzen</a>
                <a href='#' className='bottom-navigation-link bottom-navigation-link-right'>Ondernemer</a>
            </div>
        </nav>
    )
}

export default BottomNavigation;
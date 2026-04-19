import './HeroSearch.css'

function HeroSearch() {
    return (
        <section className='hero-search'>
            <div className='hero-search-container'>
                <h2 className='hero-search-title'>Specialty</h2>
                <p className='hero-search-subtitle'>Waar plannen specialistsen ontmoeten</p>
                <div className='hero-search-bar-row'>
                    <input
                        className='hero-search-input' 
                        type="text" 
                        placeholder='Zoek naar een specialist'
                    />
                    <button className='hero-search-ai-button'>AI-modus</button>
                </div>
                <div className='hero-search-categories'>
                    <button className='hero-search-category-button'>Chef</button>
                    <button className='hero-search-category-button'>Kapper</button>
                    <button className='hero-search-category-button'>Planner</button>
                    <button className='hero-search-category-button'>Bloemschikker</button>
                </div>
                <div className='hero-search-action'>
                    <button className='hero-search-find-button'>Zoek</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSearch;
import './HeroSearch.css'
import { Search, Mic, Sparkles, MapPin, Grid3x3 } from 'lucide-react';

function HeroSearch() {
    return (
        <section className='hero-search'>
            <div className='hero-search-container'>
                <div className='hero-search-title-row'>
                    <h2 className='hero-search-title-row-title'>Specialty</h2>
                    <MapPin size={22} className='hero-search-title-row-icon' />
                </div>
                <div className='hero-search-input-row'>
                    <div className='hero-search-input-wrapper'>
                        <Search size={20} className='hero-search-input-icon' />
                        <input
                            className='hero-search-input'
                            type="text"
                            placeholder='Zoek naar een specialist'
                        />
                        <button className='hero-search-mic-button' aria-label='Microfoon'>
                            <Mic size={18} />
                        </button>
                        <button className='hero-search-ai-button'>
                            <Sparkles size={16} />
                            <span>AI-Modus</span>
                        </button>
                    </div>
                </div>
                <div className='hero-search-categories-row'>
                    <button className='hero-search-category-button'>Chef</button>
                    <button className='hero-search-category-button'>Kapper</button>
                    <button className='hero-search-category-button'>Planner</button>
                    <button className='hero-search-category-button'>Bloemschikker</button>
                    <button className='hero-search-grid-button' aria-label='Meer opties'>
                        <Grid3x3 size={18} />
                    </button>
                </div>
                <div className='hero-search-action'>
                    <button className='hero-search-find-button'>Zoeken</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSearch;
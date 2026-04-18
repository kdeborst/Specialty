import './AppLayout.css'

export default function AppLayout({ children }) {
    return (
        <main className="app-layout-main">
            {children}
        </main>
    )
}
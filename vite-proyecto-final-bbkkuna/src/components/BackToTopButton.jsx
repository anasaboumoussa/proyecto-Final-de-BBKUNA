const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                padding: '10px 10px',
                backgroundColor: '#6c5ce7',
                color: 'white',
                borderRadius: '15px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                zIndex: 9999,


            }


            }
        >
            ↑
        </button>
    );
};

export default BackToTop
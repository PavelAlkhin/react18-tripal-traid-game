import style from './Slider.module.css';

function Slider () {
    const class_div1 = style.container + ' ' + style.sliderContent;
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <div className={class_div1}>
                    <h1 className={style.header}>Wow</h1>
                    <h2 className={style.subheader}>Wow.Wow.Wow</h2>
                    <div className={style.call}>
                        <button className={style.button}>Wow</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;
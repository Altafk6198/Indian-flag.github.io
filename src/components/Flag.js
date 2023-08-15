import style from '../Flag.module.css';
import wave from '../image/wave.svg';
import wave2 from '../image/wave2.svg';

const Flag = () => {

    const stroke = () => {

        const stroke = [];

        for (let i = 0; i < 24; i++) {

            let deg = 15 * i;

            stroke.push(<div className={style.stroke} style={{ transform: `translate(-50%, -100%) rotate(${deg}deg)` }}></div>);

        }

        return stroke;
    }

    return (
        <div className={style.container}>
            <h1>Happy Independence Day</h1>
            
            <div className={style.frame}>
                <div className={style.main}>
                    <div className={`${style.ocean} ${style.oceanTop}`}>
                        <div className={style.wave} style={{ background: `url(${wave2}) repeat-x` }}></div>
                    </div>

                    <div className={style.chakra}>
                        <div className={style.chakraInner}>
                            {stroke()}
                        </div>
                    </div>

                    <div className={style.ocean}>
                        <div className={style.wave} style={{ background: `url(${wave}) repeat-x` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Flag;
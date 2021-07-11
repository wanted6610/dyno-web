import React from 'react';
import { NavLink } from 'react-router-dom';
import './content.css';
import NewsRow from './news-row/news-row';

const Content = () =>{
    return(
        <main className="page">
            <div className="container">
                <div className="offer">
                    <p className="offer__text">
                        Компания Dyno была основана в 2011 году, как основной разработчик банковских IT решений для крупнейшего банка региона – Волго-Вятского Банка Сбербанка РФ. 
                    </p>
                    <p className="offer__text">
                        С тех пор Компания выросла в современную, мощную и постоянно развивающуюся организацию, которая ценит индивидуальность каждого своего Клиента. Мы обеспечиваем высочайшее качество сервиса и постоянно его совершенствуем.
                    </p>
                    <p className="offer__text">
                        Dyno — разрабатывает и поддерживает технологические решения и автоматизированные системы по поддержке всех направлений бизнеса и отраслей промышленности. Это решения с тонкой настройкой на уникальность наших Клиентов, они основаны на современных платформах и тенденциях.
                    </p>
                    <p className="offer__text">
                        Особенность и наша гордость — огромный опыт в работе с большими объемами данных, обеспечение безопасности данных, эффективная поддержка крупных заказчиков, таких как Госсектор.
                    </p>                                                          
                    <NavLink to="/workers" className="offer__btn">
                        Список сотрудников
                    </NavLink>
                </div>
                <div className="news">
                    <h3 className="news__title">Последние новости</h3>
                    <div className="news-wrapper">
                        <div className="news-row">
                            <NewsRow />
                            <NewsRow />
                            <NewsRow />
                        </div>                                                                                      
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content;


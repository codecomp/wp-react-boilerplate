import React from 'react';
import { Link } from 'react-router-dom';

import { h1 } from './style.scss';

const Home = () => {
    return (
        <div>
            <p className={h1}>Home</p>

            <h1>Lorem ipsum</h1>
            <h2>Lorem ipsum</h2>
            <h3>Lorem ipsum</h3>
            <h4>Lorem ipsum</h4>
            <h5>Lorem ipsum</h5>
            <h6>Lorem ipsum</h6>

            <p><strong>Lorem ipsum</strong> dolor <abbr title="Sergeant">Sgt.</abbr> sit amet, <acronym
                title="Founded in 2006"> Twitter</acronym> consectetur adipiscing elit.
            <del>Curabitur in mattis augue</del>
        , sit amet blandit massa.
            <ins>Cras ultrices in augue eu pellentesque</ins>
        . Nam ultrices turpis at massa
            <time dateTime="2008-02-14 20:00">Valentines day</time>
        condimentum viverra. Donec quis posuere nunc. Donec viverra vitae enim sed posuere. Ut risus velit, eleifend
        non mi id, efficitur interdum magna. Nunc eu ultricies urna, a posuere risus. Praesent at ex auctor, congue
        nunc id, aliquet justo. Nullam id aliquam tellus. Duis sit amet eros at orci molestie sodales in eget massa.
        Proin tincidunt arcu at nisi ornare hendrerit. Nullam feugiat quis magna ac tempor. Pellentesque tincidunt
        lacinia auctor. Integer congue neque a felis eleifend lacinia.
            </p>

            <ul>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
            </ul>

            <ol>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
                <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
            vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                </li>
            </ol>

            <blockquote>
        Maecenas efficitur lobortis sapien in feugiat. Nunc pretium ex et est facilisis ultrices. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Nullam at sodales quam, non aliquet odio. Curabitur mauris
        urna, congue ac blandit eu, faucibus dapibus quam. Sed id ultrices eros, at rhoncus tellus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Aliquam ut tempor augue.
                <cite>-Sed volutpat, libero tempor interdum varius.</cite>
            </blockquote>

            <address>Glen Stansberry
        1234 Web Dev Lane
        Anywhere, USA
            </address>

            <a href="http://facebook.com" title="test" className="js-share">Hyperlink</a>

            <button>Button</button>

            <form action="contact_email" className="form js-process-form">
                <div className="form__field">
                    <label className="form__label" htmlFor="input1">Text Field</label>
                    <input className="form__input" type="text" name="text" id="input1"/>
                </div>

                <div className="form__field">
                    <label className="form__label" htmlFor="input2">Textarea</label>
                    <textarea className="form__input" name="textara" id="input2"></textarea>
                </div>

                <div className="form__field">
                    <label className="form__label" htmlFor="input3">select Field</label>
                    <select className="form__select" name="select" id="input3">
                        <option value="">Blank</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </select>
                </div>

                <button className="button">Button</button>
            </form>

            <pre>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at. Proin dictum ornare tellus, cursus tincidunt velit dapibus ac. Fusce commodo eu magna non finibus. Vestibulum eros orci, ultricies eget fermentum ut, blandit et sapien. Praesent pretium metus nibh, vel interdum erat tincidunt in. Morbi vitae orci tincidunt, rhoncus justo ac, molestie enim. Integer condimentum volutpat neque, a gravida nisi laoreet ac. Nam a rhoncus ipsum. Pellentesque ac dui eu massa consectetur blandit. Nullam sollicitudin gravida varius. Nam ut libero sit amet ex feugiat pellentesque eu non nunc. </pre>

            <div className="wysiwyg">
                <h1 className={h1}>Lorem ipsum</h1>
                <h2>Lorem ipsum</h2>
                <h3>Lorem ipsum</h3>
                <h4>Lorem ipsum</h4>
                <h5>Lorem ipsum</h5>
                <h6>Lorem ipsum</h6>

                <p><strong>Lorem ipsum</strong> dolor <abbr title="Sergeant">Sgt.</abbr> sit amet, <acronym
                    title="Founded in 2006"> Twitter</acronym> consectetur adipiscing elit.
                <del>Curabitur in mattis augue</del>
            , sit amet blandit massa.
                <ins>Cras ultrices in augue eu pellentesque</ins>
            . Nam ultrices turpis at massa
                <time dateTime="2008-02-14 20:00">Valentines day</time>
            condimentum viverra. Donec quis posuere nunc. Donec viverra vitae enim sed posuere. Ut risus velit,
            eleifend non mi id, efficitur interdum magna. Nunc eu ultricies urna, a posuere risus. Praesent at ex
            auctor, congue nunc id, aliquet justo. Nullam id aliquam tellus. Duis sit amet eros at orci molestie
            sodales in eget massa. Proin tincidunt arcu at nisi ornare hendrerit. Nullam feugiat quis magna ac
            tempor. Pellentesque tincidunt lacinia auctor. Integer congue neque a felis eleifend lacinia.
                </p>

                <ul>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                </ul>

                <ol>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                    <li>Suspendisse potenti. Proin hendrerit erat sed justo cursus viverra. Aenean ut nisl id ligula pretium
                vestibulum nec nec nunc. Aliquam gravida dapibus ante, sed volutpat enim feugiat at.
                    </li>
                </ol>

                <blockquote>
            Maecenas efficitur lobortis sapien in feugiat. Nunc pretium ex et est facilisis ultrices. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nullam at sodales quam, non aliquet odio. Curabitur
            mauris urna, congue ac blandit eu, faucibus dapibus quam. Sed id ultrices eros, at rhoncus tellus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut tempor augue.
                    <cite>-Sed volutpat, libero tempor interdum varius.</cite>
                </blockquote>

                <address>Glen Stansberry
            1234 Web Dev Lane
            Anywhere, USA
                </address>

                <a href="#" title="test">Hyperlink</a>

                <button>Button</button>
            </div>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </div>
    );
};

export default Home;

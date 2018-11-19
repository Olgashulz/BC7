import React, {Component} from 'react';
import './ApearFilmCard.css';
import RecommendFilm from "../RecommendFilm/RecommendFilm";
import Loader from 'react-loader-spinner';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import {Switch, Route} from "react-router-dom";
import {loadingStart} from "../redux/actions/isLoadingAction";
import {connect} from 'react-redux';
import {apearFilmCardAsynx} from '../redux/actions/apearFilmCardActions';
import PropTypes from 'prop-types';




class ApearFilmCard extends Component {
    state = {
        isLoading: true,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.props.apearFilmCardAsynx(nextProps.match.params.id)
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.apearFilmCardAsynx(id)
        setTimeout(() => this.show(), 2000)
    }

    show = () => {
        this.setState({
            isLoading: false,
        })
    };

    render() {
        return (
            <div>
                {this.state.isLoading ? <div className="loader"><Loader
                    type="Puff"
                    color="#00BFFF"
                    height="100"
                    width="100"
                /></div> : <div className="containerApearFilm">
                    <div className="header-card-film"
                         style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300/${this.props.movie_info.backdrop_path}")`}}>
                        <div className="img-film">
                            <img className="imgApearFilmCard"
                                 src={`https://image.tmdb.org/t/p/w300/${this.props.movie_info.poster_path}`}/>
                        </div>
                        <div className="film-info">
                            <span className="film-year">{`${this.props.movie_info.release_date}`.substring(0, 4)}</span>
                            <h3 className="film-name">{this.props.movie_info.title}</h3>
                            <h4 className='original_title'>{this.props.movie_info.original_title}</h4>
                            <p className="film-duration">{this.props.movie_info.runtime ?
                                <i className="fas fa-clock"> {this.props.movie_info.runtime} min </i> : null}</p>
                            <p className='film-budget'>
                                {this.props.movie_info.budget !== 0 ?
                                    <i className="fas fa-dollar-sign"> {this.props.movie_info.budget} </i> : null}</p>
                            <p className="film-genre">Жанр: {this.props.movie_info.genres.map(el => `${el.name} `)}</p>
                        </div>
                    </div>
                    <div className="informationApearFilm">
                        <div className="infoAperfilm">
                            <h4 className="film-overwiew">Overwiew</h4>
                        </div>
                        <p className="textApearFilm">{this.props.movie_info.overview.length ? this.props.movie_info.overview :
                            <span className='notFound'>SORRY, NOT FOUND THIS INFORMATION</span>}
                        </p>

                        <div className="video">
                            <span className="span-youtube"><i className="fab fa-youtube"></i>youtube</span>
                            {this.props.movie_info.trailers.length ? <iframe className="video_trailer"
                                                                             src={`https://www.youtube.com/embed/${this.props.movie_info.trailers[0].key}?autoplay=1`}
                                                                             frameBorder="0"
                                                                             allow="autoplay; encrypted-media"
                                                                             allowFullScreen></iframe> :
                                <h3 className="notFound">SORRY, NOT FOUND THIS TRAILER</h3>}
                        </div>
                    </div>
                    <div className="slider_Films">
                        <StyleRoot>
                            <Coverflow
                                displayQuantityOfSide={1}
                                navigation={true}
                                enableHeading={true}
                                active={0}
                                media={{
                                    '@media (min-width: 320px)': {
                                        width: '300px',
                                        height: '350px'
                                    },
                                    '@media (min-width: 768px)': {
                                        width: '400px',
                                        height: '350px'
                                    },
                                    '@media (min-width: 1280px)': {
                                        width: '620px',
                                        height: '530px'
                                    },
                                }}>
                                {this.props.movie_info.recommendations.map(el => <Route path="/cardFilm/:id"
                                                                                        render={props => <RecommendFilm
                                                                                            id={el.id}
                                                                                            poster={el.poster_path}/>}
                                key={el.id}/>)}
                            </Coverflow>
                        </StyleRoot>
                    </div>
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie_info: state.apearFilmCard,
        isLoading: state.isLoading

    }
}

function mapDispatchToProps(dispatch) {
    return {
        apearFilmCardAsynx: function (id) {
            dispatch(apearFilmCardAsynx(id))
        },
        loadingStart: function () {
            dispatch(loadingStart())
        }
    }

}

ApearFilmCard.propTypes = {
    movie_info: PropTypes.object,
    isLoading: PropTypes.bool,
    nextProps: PropTypes.object,
    show: PropTypes.func,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.number,
    original_title: PropTypes.string,
    runtime: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.array,
    textApearFilm: PropTypes.string,
    trailers: PropTypes.array,
    key: PropTypes.number,
    props: PropTypes.array,
    id: PropTypes.number,



};

export default connect(mapStateToProps, mapDispatchToProps)(ApearFilmCard);

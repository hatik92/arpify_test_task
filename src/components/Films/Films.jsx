import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFilms, selectFilms } from './filmsSlice';

function Films() {
  const dispatch = useAppDispatch()
  const myFilms = useAppSelector(selectFilms)
  useEffect(() => {
    dispatch(getFilms())
  }, [dispatch]);
  return <div>
    {myFilms.results.length && myFilms.results.map((film, i) =>
      <div key={i}>
        <Link to={`/films/${film.filmId}`} style={{ textDecoration: 'none', color: 'rgb(255, 230, 0)' }}>{film.title}</Link><br />
      </div>
    )}
  </div>
}

export default Films
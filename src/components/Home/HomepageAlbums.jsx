import React, { useEffect } from "react"
import { getHomepageAlbumsAction } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { Image } from "react-bootstrap"
export default function HomepageAlbums() {
  let homepageAlbums = useSelector(
    (state) => state.homepageAlbums.homepageAlbumListFromFetch
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomepageAlbumsAction())
    console.log("-----homepageAlbums again-------", homepageAlbums)
  }, [])

  return (
    <div className="cards-container d-flex flex-wrap" id="albumsRow">
      <span className="see-all">See All</span>
      {homepageAlbums.slice(0, 7).map((album) => (
        <div className="card mb-3" key={album.id}>
          <div className="img-container">
            <Image
              src={album.album.cover_medium}
              className="albumSectionImage"
              alt=""
            />
          </div>
          <div class="album-content">
            <div className="text-container">
              <p className="title">{album.album.title}</p>
              <p className="artist">{album.artist.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

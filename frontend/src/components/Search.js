import { useState } from "react"

const Search = () => {

    const [keyword, setKeyword] = useState("")

  return (
    <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
            <input 
            type="text" 
            placeholder="Enter Product Name...."
            className="form-control"
            id="search_feild"
            onChange={(e)=> setKeyword(e.target.value)}
            />
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search
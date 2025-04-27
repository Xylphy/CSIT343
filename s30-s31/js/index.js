document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    fetch("https://movieapp-api-lms1.onrender.com/movies/getMovies")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok");
            }
        })
        .then((data) => {
            data.movies.forEach((movie) => {
                const movieElement = document.createElement("div");
                movieElement.className =
                    "bg-[#2a2a2a] rounded-lg overflow-hidden p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300";

                const movieImage = document.createElement("img");
                movieImage.src = "https://via.placeholder.com/200x300";
                movieImage.alt = "Movie Poster";
                movieImage.className = "w-full rounded";

                const movieTitle = document.createElement("h2");
                movieTitle.className = "text-xl mt-3 font-semibold";
                movieTitle.textContent = movie.title;

                const movieGenre = document.createElement("p");
                movieGenre.className = "text-gray-400 text-sm";
                movieGenre.textContent = movie.genre;

                movieElement.appendChild(movieImage);
                movieElement.appendChild(movieTitle);
                movieElement.appendChild(movieGenre);

                container.appendChild(movieElement);
            });
        });
});

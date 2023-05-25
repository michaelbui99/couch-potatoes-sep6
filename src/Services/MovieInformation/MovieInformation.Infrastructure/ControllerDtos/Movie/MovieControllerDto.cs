﻿using MovieInformation.Domain.Models.MovieImages;
using MovieInformation.Infrastructure.ControllerDtos.Images;
using MovieInformation.Infrastructure.ResponseDtos;

namespace MovieInformation.Infrastructure.ControllerDtos.Movie;

public class MovieControllerDto
{
    public int Id { get; set; }
    public string Title { get; set; } = default!;
    public string Summary { get; set; } = default!;
    public string ImageUri { get; set; } = default!;
    public string BackdropUri { get; set; } = default!;
    public float TmdbScore { get; set; }
    public string TagLine { get; set; } = default!;
    public int TmdbVoteCount { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int RunTime { get; set; }
    public bool IsForKids { get; set; }
    public string Status { get; set; } = default!;
    public string Homepage { get; set; } = default!;
    public string TrailerUri { get; set; } = default!;
    public long Budget { get; set; }
    public long Revenue { get; set; }
    public IReadOnlyCollection<ReadKeywordDto> Keywords { get; set; } = default!;
    public IReadOnlyCollection<ReadLanguageDto> Languages { get; set; } = default!;
    public IReadOnlyCollection<ReadGenreDto> Genres { get; set; } = default!;
    public IReadOnlyCollection<MovieImageDto> Posters { get; set; } = default!;
}
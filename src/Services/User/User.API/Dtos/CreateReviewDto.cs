using Newtonsoft.Json;

namespace User.API.Dtos;

public class CreateReviewDto
{
    [JsonProperty("userId")]
    public string UserId { get; set; }

    [JsonProperty("rating")]
    public int Rating { get; set; }

    [JsonProperty("reviewText")]
    public string ReviewText { get; set; }
}
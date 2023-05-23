import React, {useEffect, useState} from "react";
import MovieCredits from "../models/movie_credits";
import {useNavigate, useParams} from "react-router-dom";
import {MovieCreditsAndDetails, useFetchMovieCreditsAndMovies} from "../services/movie-credits-and-details";
import {useFetchMovieCredits} from "../services/movie-credits";
import {
    Box, Card, CardBody,
    Flex,
    Grid,
    GridItem, Heading, Image,
    Modal, ModalBody, ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Spinner,
    Stack,
    StackDivider,
    Text
} from "@chakra-ui/react";
import BackgroundImageFull from "../components/BackgroundImageFull";
import {getPosterImageUri} from "../services/images";
import BasePage from "../components/BasePage";
import {MovieDetailsHeaderInformationbox} from "../components/movie-details/MovieDetailsHeaderInformationbox";
import {Carousel} from "react-responsive-carousel";
import {MovieDetailsRightInformationbox} from "../components/movie-details/MovieDetailsRightInformationbox";
import {MovieDetailsBottomInformationbox} from "../components/movie-details/MovieDetailsBottomInformationbox";
import {MovieDetailsCastComponent} from "../components/movie-details/MovieDetailsCastComponent";
import {
    MovieDetailsRecommendedMoviesComponent
} from "../components/movie-details/MovieDetailsRecommendedMoviesComponent";
import {MovieDetailsReviewsComponent} from "../components/movie-details/MovieDetailsReviewsComponent";
import backgroundImageFull from "../components/BackgroundImageFull";
import {PersonCastCardComponent} from "../components/PersonCastCardComponent";

const FullCastAndCrewPage = () => {
    const Background_Temp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const {movieId} = useParams()

    const [movieCredits, setMovieCredits] = useState<MovieCredits | null>(null);
    const themeColor = "teal";
    const navigate = useNavigate();
    const {isLoading, isError, data, error} = useFetchMovieCredits(Number(movieId));

    useEffect(() => {
        if (!isLoading) {
            setMovieCredits(
                data ?? null
            );
        }
    }, [isLoading])

    if (isLoading) {
        return <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    }

    if (isError) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }


    return (
        <BackgroundImageFull imageUri={Background_Temp}>
            <BasePage>
                <Grid
                    templateColumns={{base: "6fr", md: "repeat(6, 1fr)", lg: "repeat(6, 1fr)"}} gap={4}
                >
                    <GridItem colSpan={3}>
                        <Heading>Cast </Heading>

                        {movieCredits?.creditsAsCast.map((cast) => (
                            <PersonCastCardComponent Background_Temp={Background_Temp} castMember={cast}
                                                     themeColor={themeColor} maxSize={400}
                                                     minSize={200}></PersonCastCardComponent>

                        ))}


                    </GridItem>
                    <GridItem colSpan={3}>
                        <Heading>Crew </Heading>
                        <Stack direction="column">

                        </Stack>

                    </GridItem>

                </Grid>
            </BasePage>
        </BackgroundImageFull>
    );
};
export default FullCastAndCrewPage
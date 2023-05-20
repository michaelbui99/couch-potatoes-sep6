import {Flex, HStack, Text, VStack} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import React, {FC} from "react";
import Movie from "../../models/movie";

export interface FrontPageMovieInfoBoxComponentProps {
    movie: Movie | null;
}


const FrontPageMovieInfoBoxComponent: FC<FrontPageMovieInfoBoxComponentProps> = ({movie}) => {
    return (
        <><VStack>
            <Text marginTop="1rem" textColor="white" fontSize={{base: 'xl', md: '2xl', lg: '3xl'}}
                  textTransform="uppercase">
                {movie?.title}
            </Text>
            <Flex width="100%" justifyContent="center" alignItems="center">
                <HStack>
                    {movie?.genres?.slice(0, 3).map((genre, index) => index == movie.genres?.length - 1 ?
                        <Text textColor="white" textTransform="uppercase"
                              fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>{genre.name} </Text> :
                        <Text textColor="white" textTransform="uppercase"
                              fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>{genre.name} | </Text>)}
                </HStack>
            </Flex>
            <Text textColor="white" fontSize={{base: 'lg', md: 'xl', lg: '2xl'}}>
                {new Date(movie?.releaseDate as string).toLocaleDateString()}
            </Text>
            <StarRatingComponent name="rating" value={movie?.tmdbScore || 0} starCount={10}/>
        </VStack></>
    )
};

export default FrontPageMovieInfoBoxComponent;
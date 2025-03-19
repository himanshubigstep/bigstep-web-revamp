'use client'
import React, { useEffect, useState } from 'react'
import ProblemSolving from '../../components/problem-solving/ProblemSolving'
import RealWorldSuccessStories from '../../components/real-world-sucess-stories/RealWorldSuccessStories'
import ChallengingFormSection from '../../components/challenging-form-section/ChallengingFormSection'
import { fetchAiChallengesPage, fetchAiChallengesTypes, fetchChallengesTypes } from '@/api-data/api'
import LoaderSpinner from '../../components/common/loader-spinner/LoadingSpinner'
import ExpertiesAccolades from '../../components/experties_accolades/ExpertiesAccolades'

interface AiChallengesPage {
  attributes: {
    challenge_heading: {
      id: number;
      challenges_heading: string;
    }
    challenge_listing: {
      id: number;
      challenges_icon: {
        data: {
          id: number;
          attributes: {
            url: string
          }
        }
      }
      challenges_list: string;
    }[]
    challanges_form_heading: {
      challenges_heading: string;
    }
    problem_solving_introduction: {
      id: number;
      heading: string;
      description: string;
      background_image: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
    problem_solving_data: {
      id: number;
      heading: string;
      description: string;
      hex_code: string;
      background_image: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
    RealWorld_SuccessStories_Introduction: {
      id: number;
      heading: string;
      description: string;
    }
    RealWorld_SuccessStories_Data: {
      id: number;
      heading: string;
      description: string;
      button_text: string;
      button_link: string;
      background_image: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }
    BigStep_Accolades_Introduction: {
      id: number;
      heading: string;
      description: string;
    }
    BigStep_Accolades_Data: {
      id: number;
      heading: string;
      description: string;
      button_text: string;
      button_link: string;
      images: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }
  }
}

const AITechnologies = () => {
  const [challengescategories, setChallengesCategories] = useState(null)
  const [awsChallengesData, setAwsChallengesData] = useState<AiChallengesPage | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChallengesCategories = async () => {
      try {
        const response = await fetchAiChallengesTypes();
        setChallengesCategories(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchChallengesCategories();
  }, [])

  useEffect(() => {
    const fetchAwsChallenges = async () => {
      try {
        const response = await fetchAiChallengesPage();
        setAwsChallengesData(response)
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchAwsChallenges();
  }, [])

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <ChallengingFormSection
        challengesFormButtonText="Get Free Ai Assessment"
        challengescategories={challengescategories}
        challengesLabel="Ai Challenges"
        challengesData={awsChallengesData}
      />
      <ProblemSolving
        problemSolvingData={awsChallengesData}
      />
      <RealWorldSuccessStories
        successStoriesData={awsChallengesData}
      />
      <ExpertiesAccolades
        successStoriesData={awsChallengesData}
      />
    </div>
  )
}

export default AITechnologies
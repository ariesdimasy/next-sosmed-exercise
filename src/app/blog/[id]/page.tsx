"use client"

import { useState, useEffect } from "react"
import HeroDetail from "@/components/HeroDetail";
import { Heading } from "@chakra-ui/react";
import { getDetailDataPost } from "@/actions/blog";

import { useParams } from 'next/navigation'

export default function BlogDetail() {

  const params = useParams<{ id:string }>();
  const [blogDetail, setBlogDetail] = useState<any>()

  useEffect(() => {
    handleGetDetailPost()
  },[])

  const handleGetDetailPost = async () => {
    const blogDetail = await getDetailDataPost(params.id)
    setBlogDetail(blogDetail)
  }

  return (
    <div className="h-full">
      <HeroDetail />
      <Heading marginTop={40} marginBottom={20} textAlign={"center"}>
        
        {blogDetail?.data?.fields?.title}
      </Heading>
     
      <div>{blogDetail?.data?.fields?.description}</div>
    </div>
  );
}

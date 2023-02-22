import * as React from 'react';

import styles from './SharepointWeb.module.scss';
import { ISharepointWebProps } from './ISharepointWebProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import  axios from 'axios';

import { useEffect, useState } from 'react'
import { spfi, SPFx } from "@pnp/sp";
import { WebPartContext } from "@microsoft/sp-webpart-base";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/folders";
import "@pnp/sp/files";




export default function SharepointWeb(props: ISharepointWebProps) {

  const [name , setName] = useState(null);
  const [company, setCompany] = useState(null);
  const [imageAdress, setImageAdress] = useState(null);
  const [public_repos, setPublic_repos] = useState(null);
  const [following, setFollowing] = useState(null);
  const [bio, setBio] = useState(null);



  function getUserData() {

    axios.get("https://api.github.com/users/brunogoniadis")
      .then(response => {

        const dataImage = response.data.avatar_url;
        const dataName = response.data.name;
        const dataCompany = response.data.company;
        const dataPublic_repos = response.data.public_repos;
        const dataFollowing = response.data.following;
        const dataBio = response.data.bio;


        setImageAdress(dataImage);
        setName(dataName);
        setCompany(dataCompany);
        setPublic_repos(dataPublic_repos);
        setFollowing(dataFollowing);
        setBio(dataBio);


      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    getUserData();
  }, [])
  
  return (
    <section className={`${styles.sharepointWeb} `}>

      <div className={`${styles.cardContainer}`}>
        <img className={`${styles.imageProfile}`} src={imageAdress} alt="Profile Image" />
        
        
        <h3 className={`${styles.nameDescription}`}><strong>{name}</strong></h3>
        <p className={`${styles.companyDescription}`}>{company}</p>

        <div className={`${styles.repos}`}>
          <h3>{public_repos}</h3>
          <h3>{following}</h3>
          <p>Repositórios</p>
          <p>Seguindo</p>
        </div>

        <button className={`${styles.buttonCheck}`}>Check Profile!</button>


        <p className={`${styles.bioDescription}`}>{bio}</p>
        

      </div>



    </section>
  )
}

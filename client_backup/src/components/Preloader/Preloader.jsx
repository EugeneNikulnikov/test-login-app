import React, {useState} from 'react';
import Loader   from "react-loader-spinner";
import {store} from "../../store/store";
import {connect} from "react-redux";

export const Preloader = ({loading}) => {
  return (<>
      {loading && <Loader type="ThreeDots" color="#ABCDEF" height={60} width={60}/>}
      </>
  )
};

const mapStateToProps = () => {
    return {
        loading: store.getState().status.loading,
    }
};

export const CPreloader = connect(mapStateToProps)(Preloader);
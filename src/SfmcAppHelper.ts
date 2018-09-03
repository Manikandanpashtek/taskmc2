'use strict';

import express = require("express");
import path = require('path');
import Utils = require('./utils');

export default class SfmcAppHelper
{
    private static _requestStatusMap = new Map<string, string>();
    
    /**
     * login: called by Marketing Cloud when app is launched
     * Handles POST on: /login
     */
    public login(req: express.Request, res: express.Response)
    {
        var sessionId = req.session.id;
        Utils.logDebug("login called. SessionId = " + sessionId);

        // Parse JWT from body

        res.sendStatus(202); // accepted
    }
   
    /**
     * logout: called by Marketing Cloud when app is shutdown
     * Handles POST on: /logout
     */
    public logout(req: express.Request, res: express.Response)
    {
        var sessionId = req.session.id;
        Utils.logDebug("logout called. SessionId = " + sessionId);

        // Parse JWT from body

        res.sendStatus(202); // accepted
    }

    /**
     * jwtinfo: called by web app to obtain JWT for display purposes
     * Handles GET on: /jwtinfo
     */
    public getJwtInfo(req: express.Request, res: express.Response)
    {
        var sessionId = req.session.id;
        Utils.logDebug("login called. SessionId = " + sessionId);

        // Parse JWT from body

        res.sendStatus(202); // accepted
    }
}
/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

/**
 * @ngdoc controller
 * @name dashboard.controller:DashboardOverviewCtrl
 * @description This class is handling the controller of the overview to display in the dashboard
 * @author Florent Benoit
 */
export class DashboardOverviewCtrl {


  /**
   * Default constructor
   * @ngInject for Dependency injection
   */
  constructor($location, cheAPI, codenvyAPI) {
    this.$location = $location;
    this.isSaasServiceAvailable = cheAPI.getService().isServiceAvailable(codenvyAPI.getSaas().getSaasServicePath());

  }

  addCreditCard() {
    this.$location.path('account/billing');
  }

}
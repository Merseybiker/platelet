/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      displayName
      name
      dateOfBirth
      assignedVehicles {
        id
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        assignedUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      status
      profilePictureURL
      profilePictureThumbnailURL
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      displayName
      name
      dateOfBirth
      assignedVehicles {
        id
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        assignedUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      status
      profilePictureURL
      profilePictureThumbnailURL
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      displayName
      name
      dateOfBirth
      assignedVehicles {
        id
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        assignedUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      status
      profilePictureURL
      profilePictureThumbnailURL
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      listed
      protected
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      listed
      protected
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      contact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      listed
      protected
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLogEntry = /* GraphQL */ `
  subscription OnCreateLogEntry {
    onCreateLogEntry {
      id
      ipAddress
      callingUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dataFields
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLogEntry = /* GraphQL */ `
  subscription OnUpdateLogEntry {
    onUpdateLogEntry {
      id
      ipAddress
      callingUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dataFields
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLogEntry = /* GraphQL */ `
  subscription OnDeleteLogEntry {
    onDeleteLogEntry {
      id
      ipAddress
      callingUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dataFields
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle {
    onCreateVehicle {
      id
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignedUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle {
    onUpdateVehicle {
      id
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignedUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle {
    onDeleteVehicle {
      id
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignedUser {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
      id
      name
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      telephoneNumber
      mobileNumber
      emailAddress
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
      id
      name
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      telephoneNumber
      mobileNumber
      emailAddress
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
      id
      name
      address {
        id
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        zipcode
        what3words
        createdAt
        updatedAt
      }
      telephoneNumber
      mobileNumber
      emailAddress
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      zipcode
      what3words
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      zipcode
      what3words
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      zipcode
      what3words
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDeliverable = /* GraphQL */ `
  subscription OnCreateDeliverable {
    onCreateDeliverable {
      id
      type
      count
      unit
      numBoxes
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDeliverable = /* GraphQL */ `
  subscription OnUpdateDeliverable {
    onUpdateDeliverable {
      id
      type
      count
      unit
      numBoxes
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDeliverable = /* GraphQL */ `
  subscription OnDeleteDeliverable {
    onDeleteDeliverable {
      id
      type
      count
      unit
      numBoxes
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      reference
      orderInRelay
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      timeOfCall
      timePickedUp
      timeDroppedOff
      timeCancelled
      timeRejected
      requesterContact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      pickupLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dropoffLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      priority
      deliverables {
        id
        type
        count
        unit
        numBoxes
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedRidersDisplayString
      assignedCoordinatorsDisplayString
      assignedRiders {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedCoordinators {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      relayPrevious {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      relayNext {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      reference
      orderInRelay
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      timeOfCall
      timePickedUp
      timeDroppedOff
      timeCancelled
      timeRejected
      requesterContact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      pickupLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dropoffLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      priority
      deliverables {
        id
        type
        count
        unit
        numBoxes
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedRidersDisplayString
      assignedCoordinatorsDisplayString
      assignedRiders {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedCoordinators {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      relayPrevious {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      relayNext {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      reference
      orderInRelay
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      timeOfCall
      timePickedUp
      timeDroppedOff
      timeCancelled
      timeRejected
      requesterContact {
        id
        name
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        telephoneNumber
        mobileNumber
        emailAddress
        createdAt
        updatedAt
      }
      pickupLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dropoffLocation {
        id
        name
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        address {
          id
          ward
          line1
          line2
          line3
          town
          county
          state
          country
          postcode
          zipcode
          what3words
          createdAt
          updatedAt
        }
        listed
        protected
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      patch
      priority
      deliverables {
        id
        type
        count
        unit
        numBoxes
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedRidersDisplayString
      assignedCoordinatorsDisplayString
      assignedRiders {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedCoordinators {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      relayPrevious {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      relayNext {
        id
        reference
        orderInRelay
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        timeOfCall
        timePickedUp
        timeDroppedOff
        timeCancelled
        timeRejected
        requesterContact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        pickupLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        dropoffLocation {
          id
          name
          listed
          protected
          createdAt
          updatedAt
        }
        patch
        priority
        deliverables {
          id
          type
          count
          unit
          numBoxes
          createdAt
          updatedAt
        }
        assignedRidersDisplayString
        assignedCoordinatorsDisplayString
        assignedRiders {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        assignedCoordinators {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        relayPrevious {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        relayNext {
          id
          reference
          orderInRelay
          timeOfCall
          timePickedUp
          timeDroppedOff
          timeCancelled
          timeRejected
          patch
          priority
          assignedRidersDisplayString
          assignedCoordinatorsDisplayString
          status
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        publiclyVisible
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        numEdits
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      body
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      publiclyVisible
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      numEdits
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      body
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      publiclyVisible
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      numEdits
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      body
      author {
        id
        username
        contact {
          id
          name
          telephoneNumber
          mobileNumber
          emailAddress
          createdAt
          updatedAt
        }
        displayName
        name
        dateOfBirth
        assignedVehicles {
          id
          name
          manufacturer
          model
          dateOfManufacture
          dateOfRegistration
          createdAt
          updatedAt
        }
        patch
        status
        profilePictureURL
        profilePictureThumbnailURL
        comments {
          id
          body
          publiclyVisible
          numEdits
          createdAt
          updatedAt
        }
        loggedActions {
          id
          ipAddress
          dataFields
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      publiclyVisible
      loggedActions {
        id
        ipAddress
        callingUser {
          id
          username
          displayName
          name
          dateOfBirth
          patch
          status
          profilePictureURL
          profilePictureThumbnailURL
          createdAt
          updatedAt
        }
        dataFields
        createdAt
        updatedAt
      }
      numEdits
      createdAt
      updatedAt
    }
  }
`;
export const onCreateServerSettings = /* GraphQL */ `
  subscription OnCreateServerSettings {
    onCreateServerSettings {
      id
      imageURL
      favicon
      version
      hostname
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateServerSettings = /* GraphQL */ `
  subscription OnUpdateServerSettings {
    onUpdateServerSettings {
      id
      imageURL
      favicon
      version
      hostname
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteServerSettings = /* GraphQL */ `
  subscription OnDeleteServerSettings {
    onDeleteServerSettings {
      id
      imageURL
      favicon
      version
      hostname
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrganisation = /* GraphQL */ `
  subscription OnCreateOrganisation {
    onCreateOrganisation {
      id
      organisationName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganisation = /* GraphQL */ `
  subscription OnUpdateOrganisation {
    onUpdateOrganisation {
      id
      organisationName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganisation = /* GraphQL */ `
  subscription OnDeleteOrganisation {
    onDeleteOrganisation {
      id
      organisationName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      groupName
      locale
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      groupName
      locale
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      groupName
      locale
      createdAt
      updatedAt
    }
  }
`;

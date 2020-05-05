import { throttle, call, put, takeEvery, takeLatest, select} from 'redux-saga/effects'
import {
    GET_USERS_REQUEST,
    GET_USER_REQUEST,
    getUserSuccess,
    getUsersSuccess,
    updateUserSuccess,
    UPDATE_USER_NAME_REQUEST,
    UPDATE_USER_USERNAME_REQUEST,
    UPDATE_USER_CONTACT_NUMBER_REQUEST,
    UPDATE_USER_DISPLAY_NAME_REQUEST,
    UPDATE_USER_PASSWORD_REQUEST,
    UPDATE_USER_EMAIL_ADDRESS_REQUEST,
    UPDATE_USER_ROLES_REQUEST,
    UPDATE_USER_PATCH_REQUEST,
    UPDATE_USER_ADDRESS_REQUEST,
    ADD_USER_REQUEST,
    deleteUserSuccess,
    DELETE_USER_REQUEST,
    UPDATE_USER_REQUEST,
    restoreUserSuccess, RESTORE_USER_REQUEST,
} from "./UsersActions";
import { getApiControl } from "../Api"

function* getUsers() {
    const api = yield select(getApiControl);
    const result = yield call([api, api.users.getUsers]);
    yield put(getUsersSuccess(result))
}

function* getUser(action) {
    const api = yield select(getApiControl);
    const result = yield call([api, api.users.getUser], action.data);
    yield put(getUserSuccess(result))
}

export function* watchGetUsers() {
    yield takeLatest(GET_USERS_REQUEST, getUsers)
}

export function* watchGetUser() {
    yield takeLatest(GET_USER_REQUEST, getUser)
}

function* updateUser(action) {
    const api = yield select(getApiControl);
    yield call([api, api.users.updateUser], action.data.userUUID, action.data.payload);
    yield put(updateUserSuccess(action.data))
}

export function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER_REQUEST, updateUser)
}

function* deleteUser(action) {
    const api = yield select(getApiControl);
    yield call([api, api.users.deleteUser], action.data);
    yield put(deleteUserSuccess(action.data))
}

export function* watchDeleteUser() {
    yield takeLatest(DELETE_USER_REQUEST, deleteUser)
}

function* restoreUser(action) {
    const api = yield select(getApiControl);
    yield call([api, api.users.restoreUser], action.data);
    const result = yield call([api, api.users.getUser], action.data);
    yield put(restoreUserSuccess(result))
}

export function* watchRestoreUser() {
    yield takeLatest(RESTORE_USER_REQUEST, restoreUser)
}

function* addUser(action) {
    const api = yield select(getApiControl);
    yield call([api, api.users.createUser], action.data.userUUID, action.data.payload);
    yield put(updateUserSuccess(action.data))
}

export function* watchAddUser() {
    yield takeLatest(ADD_USER_REQUEST, addUser)
}

export function* watchUpdateUserName() {
    yield throttle(500, UPDATE_USER_NAME_REQUEST, updateUser)
}
export function* watchUpdateUserUsername() {
    yield throttle(500, UPDATE_USER_USERNAME_REQUEST, updateUser)
}
export function* watchUpdateUserContactNumber() {
    yield throttle(500, UPDATE_USER_CONTACT_NUMBER_REQUEST, updateUser)
}
export function* watchUpdateUserDisplayName() {
    yield throttle(500, UPDATE_USER_DISPLAY_NAME_REQUEST, updateUser)
}
export function* watchUpdateUserEmail() {
    yield throttle(500, UPDATE_USER_EMAIL_ADDRESS_REQUEST, updateUser)
}
export function* watchUpdateUserPassword() {
    yield throttle(500, UPDATE_USER_PASSWORD_REQUEST, updateUser)
}
export function* watchUpdateUserRoles() {
    yield throttle(500, UPDATE_USER_ROLES_REQUEST, updateUser)
}
export function* watchUpdateUserPatch() {
    yield throttle(500, UPDATE_USER_PATCH_REQUEST, updateUser)
}
export function* watchUpdateUserAddress() {
    yield throttle(500, UPDATE_USER_ADDRESS_REQUEST, updateUser)
}
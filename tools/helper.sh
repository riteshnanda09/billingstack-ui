#!/bin/bash

NODE_VERSION=${NODE_VERSION:-0.10.10}
NVM_SH=${NVM_SH:-$HOME/.nvm/nvm.sh}

SCRIPT_DIR=$(cd $(dirname $0) && pwd)
PROJECT_DIR=$SCRIPT_DIR/..


function install_deps() {
    curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    . $NVM_SH

    nvm install $NODE_VERSION
    nvm use v${NODE_VERSION}

    npm install -g grunt-cli
    npm install -g bower
}

function install_ui_deps() {
    . $NVM_SH
    nvm use v${NODE_VERSION}
    cd $PROJECT_DIR
    bower install
}


function build() {
    . $NVM_SH
    nvm use v${NODE_VERSION}
    cd $PROJECT_DIR
    grunt
}


function build_dist() {
    build
    tar -cvf target.tar target
    gzip target.tar
}


case $1 in
    install_deps)
        install_deps
    ;;
    install_ui_deps)
        install_ui_deps
    ;;
    build)
        build
    ;;
    build_dist)
        build_dist
    ;;
    *)
        echo "Specify a valid action:"
        echo "install_deps:    Install dependencies"
        echo "install_ui_deps: Install dependencies"
        echo "build:           Build UI"
        echo "build_dist:      Build UI tarball - useful for when distributing BS UI to multiple nodes"
    ;;
esac


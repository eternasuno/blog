FROM debian:latest

# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. On Linux, the container user's GID/UIDs
# will be updated to match your local UID/GID (when using the dockerFile property).
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=1000

# Timezone
ARG TZ=UTC

# Node.js version
ARG NODE_VERSION=lts

ENV XDG_DATA_HOME="/opt"
ENV PNPM_HOME="${XDG_DATA_HOME}/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl git && \
    curl -fsSL https://get.pnpm.io/install.sh | bash - && \
    pnpm env use --global ${NODE_VERSION} && \
    # Create a non-root user to use if preferred - see https://aka.ms/vscode-remote/containers/non-root-user.
    groupadd -f -g ${USER_GID} ${USERNAME} && \
    useradd -ms /bin/bash -u ${USER_UID} --no-user-group -g ${USERNAME} ${USERNAME} && \
    # [Optional] Add sudo support for the non-root user
    apt-get install -y sudo && \
    echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${USERNAME} && \
    chmod 0440 /etc/sudoers.d/${USERNAME} && \
    # Change Timezone
    ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && \
    echo ${TZ} > /etc/timezone && \
    # Clean up
    apt-get autoremove -y && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*
# Use the bookworm distribution as a base image since it already contains many dependencies required by Playwright.
FROM node:20-bookworm

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Non-root user name
ARG USERNAME=node

# Install basic development tools
RUN apt-get update && apt-get install -y --no-install-recommends \
  zsh \
  gh \
  jq \
  nano \
  sudo \
  vim \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Playwright system dependencies (browsers are installed in postCreateCommand)
RUN corepack enable && yarn dlx playwright install-deps chromium

# Grant passwordless sudo to the non-root user
RUN echo "$USERNAME ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USERNAME \
  && chmod 0440 /etc/sudoers.d/$USERNAME

# Ensure default user has access to /usr/local/share
RUN mkdir -p /usr/local/share/npm-global && \
  chown -R $USERNAME:$USERNAME /usr/local/share

# Persist bash history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
  && mkdir /commandhistory \
  && touch /commandhistory/.bash_history \
  && chown -R $USERNAME:$USERNAME /commandhistory

# Create workspace and config directories and set permissions
RUN mkdir -p /workspace/node_modules /workspace/.yarn/cache /home/$USERNAME/.claude /home/$USERNAME/.cache/node/corepack && \
  chown -R $USERNAME:$USERNAME /workspace /home/$USERNAME/.claude /home/$USERNAME/.cache

WORKDIR /workspace

# Switch to the non-root user
USER $USERNAME

# Set the default shell to zsh rather than sh
ENV SHELL=/bin/zsh
COPY .zshrc /home/$USERNAME/.zshrc

# Install Claude Code
RUN curl -fsSL https://claude.ai/install.sh | bash

# Install Open Code
RUN curl -fsSL https://opencode.ai/install | bash
